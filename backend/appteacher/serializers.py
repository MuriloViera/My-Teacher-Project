# O serializer é uma biblioteca para converter a tabela o banco de dados e suas informações em JSON
from django.forms import ValidationError
from rest_framework import serializers
from appteacher.models import Aula, Professor


class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor #Escolho qual modelo eu quero tranfsormar em JSON
        fields = ('id', 'nome', 'valor_hora', 'descricao', 'foto') #Escolho quais campos do modelo eu quero transformar
        # OU fields= '__all__'

class AulaSerializer(serializers.ModelSerializer): #Esse é um serializer normal, que vai converter o modelo ja existente em JSON
    class Meta:
        model = Aula
        fields = ('__all__')

class CadastroAulaSerializer(serializers.Serializer): #Esse serializer é diferente pq ele é um post, eu nao quero transformar nada que ja exista em JSON, eu quero transformar algo que nao exista (que nao tenha modelo ainda) mas que eu vou receber dps
    email = serializers.EmailField(max_length=255)
    nome = serializers.CharField(max_length=100)

    #Teste para saber se o nome tem mais de 3 caracteres
    def validate_nome(self, value):
        if len(value) < 3:
            raise ValidationError("deve ter pelo menos três caracteres")
        return value


