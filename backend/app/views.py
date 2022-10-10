from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
# Esse arquivo é aonde tem as regras, o que eu quero que seja executado quando algum http for chamado

def home(request): #Nesse caso, to criando uma regra, que recebe um http
    return render(request, 'app/home.html') #Aqui estou dizendo que quero renderizar a pagina home.html quando alguem chamar o http que eu vou informar

def json(request): #Jeito simples de retornar um JSON
    return JsonResponse({"nome": "Cleyson Lima", "idade": 26}) #Aqui estou dizendo que para ao inves de rendereizar uma pagina .html, ele retornar esse JSON ai

class HomeApiView(APIView): #Tenho que por a regra dentro de uma classe pra dizer que a regra é uma APIView
    def get(self, request, format=None): #Regra que recebe o metodo da API, o http e o formato da API
        return Response({'nome': 'Cleyson Lima', 'idade': 26}, status=200)
