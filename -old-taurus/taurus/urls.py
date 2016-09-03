from django.conf.urls import url, include
from django.contrib import admin

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('cardinal.urls')),
    url(r'^api/api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api-token-auth', obtain_jwt_token),
    url(r'^(?!api|admin|api-auth|api-token-auth)', include('sparrow.urls')),
]