from django.conf.urls import url
from django.contrib import admin
from GeekTavern import views

urlpatterns = [
    # url(r'^admin/', admin.site.urls),
    url(r'^$', views.home),
	url(r'^getstarted/', views.getStarted),
    url(r'^chat/', views.chat),
    # url(r'^test/', views.testJS),
    url(r'^login/', views.login),
    url(r'^prep/', views.prep),
    url(r'^profile/', views.profile),
]
