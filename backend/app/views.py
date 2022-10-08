from django.shortcuts import render

# Create your views here.
# Esse arquivo é aonde tem as regras, o que eu quero que seja executado quando algum http for chamado

def home(request): #Nesse caso, to criando uma regra, que recebe um http
    return render(request, 'app/home.html') #Aqui estou dizendo que quero renderizar a pagina home.html quando alguem chamar o http que eu vou informar
