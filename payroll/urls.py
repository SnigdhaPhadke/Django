from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
from payroll import views
urlpatterns = [
    #url(r'fileupload/', views.FileUploadView,name='FileUploadView1'),
    #url(r'authenticate1/', views.authenticateuser1, name='authenticateuser1'),
    url(r'authenticate/', views.authenticateuser, name='authenticateuser'),
    url(r'^$', views.index, name='index'),
    url(r'comparision/', views.Comparision.as_view()),
    url(r'legacyempdata/', views.LegacyEmpData,name='LegacyEmpData'),
    url(r'newempdata/', views.NewEmpData, name='NewEmpData'),
    url(r'legacyemppaydata/', views.LegacyEmpPayData, name='LegacyEmpPayData'),
    url(r'newemppaydata/', views.NewEmpPayData, name='NewEmpPayData'),
    url(r'empmappingdata/', views.EmpMappingData, name='EmpMappingData'),
    url(r'legacyempcomponentmapping/', views.LegacyPayComponentMapping, name='LegacyPayComponentMapping'),
    url(r'newempcomponentmapping/', views.NewPayComponentMapping, name='NewPayComponentMapping'),



]