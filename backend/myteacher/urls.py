"""myteacher URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app.views import HomeApiView, home, json

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home), #Aqui to setando a função home, para que o path que vou passar pra ela seja nenhum, ou seja, a propria pagina o localhost (http://127.0.0.1:8000)
    path('json/', json), #Aqui to setando a função json la do  views.py, passando pra ela o http http://127.0.0.1:8000/json/
    path('apijson/', HomeApiView.as_view())
]
