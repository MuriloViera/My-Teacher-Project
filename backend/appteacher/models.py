from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
# Aqui são os modelos das tabelas que vao ser criados dps dentro do meu banco de dados (db.sqlite3)

class Professor(models.Model): #Cada classe representa uma tabela no banco de dados de modelo, e cada atributo dessa classe, são as colunas dessa tabela
    nome = models.CharField(max_length= 100, null=False, blank=False) #max lenght é o tamanho maximo da string, blank é que nao pode deixar o campo sem nada e o null é que vai ter valor nela
    valor_hora = models.DecimalField(max_digits = 9, decimal_places=2, null=False, blank=False)
    descricao = models.TextField(null=False, blank=False)
    foto = models.URLField(max_length = 255, null=False, blank=False) #É um charfield(string) mas ele valida pro formato de uma URL

class Aula(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=255, null=False, blank=False) #É um charfield com validação pra saber se é email   
    professor = models.ForeignKey(to=Professor, on_delete=models.CASCADE, related_name="aulas", null=False, blank=False) #Esse atributo da tabela vai receber o ID do professor como uma chave estrangeira, pq o Id é uma chave primaria na tabela professor.