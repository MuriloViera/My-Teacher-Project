from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.views import Response
from appteacher.models import Professor, Aula
from appteacher.serializers import ProfessorSerializer, CadastroAulaSerializer, AulaSerializer
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST

class ProfessorAPIView(APIView): #Regra API
    def get(self, request, format=None): 
        professores = Professor.objects.all() #Pegando todos os objetos que existam no banco de dados criados com base no modelo Professor e passado para uma varivel
        serializer = ProfessorSerializer(professores, many=True) #Passando essa variavel para o serializer para mostrar quais objetos quero que sejam convertidos
        return Response(serializer.data, status=HTTP_200_OK) #Retornando para quem fazer essa requisçao o JSON

class CadastrarAulaAPIView(APIView):
    def post(self, request, id, format=None): # Parametros recebidos a serem serializados (JSONADOS)
        professor = get_object_or_404(Professor, id = id) #Esse objeto vai receber se existir o id do professor
        serializer = CadastroAulaSerializer(data=request.data)

        #Ver se esse serializer ta com informações validas, se tiver eu retorno os dados
        if serializer.is_valid(): #Dentro desse if eu basicamente to cadastrando uma aula no banco de dados, aquilo que eu fiz no powershell pros professores
            aula1 = Aula(
                nome = serializer.validated_data.get('nome'),
                email = serializer.validated_data.get('email'),
                professor = professor
                )
            aula1.save()
            aula1_serializer = AulaSerializer(aula1, many=False)    
            return Response(aula1_serializer.data, status=HTTP_201_CREATED)

        return Response({"message": "Houveram erros de validação", "errors": serializer.errors}, status=HTTP_400_BAD_REQUEST) #Se nao retorno os erros de serializer        