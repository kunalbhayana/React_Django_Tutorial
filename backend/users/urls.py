from django.urls import path
from . import views

urlpatterns = [
    path('api/register/', views.register_user, name='register'),
    path('api/users/', views.get_all_users, name='get_all_users'),
]
