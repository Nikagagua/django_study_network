from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_page, name='login'),
    path('logout/', views.logout_user, name='logout-user'),
    path('register/', views.register_page, name='register'),

    path('', views.home, name='home'),
    path('room/<int:pk>/', views.room, name='room'),
    path('profile/<int:pk>/', views.user_profile, name='user-profile'),
    path('update-user/', views.update_user, name='update-user'),

    path('create-room/', views.create_room, name='create-room'),
    path('update-room/<int:pk>/', views.update_room, name='update-room'),
    path('delete-room/<int:pk>/', views.delete_room, name='delete-room'),
    path('delete-message/<int:pk>/', views.delete_message, name='delete-message'),
    path('delete-activity/<int:pk>/', views.delete_message, name='delete-activity'),

    path('topics/', views.topics_page, name='topics'),
    path('activity/', views.activity_page, name='activity'),
]
