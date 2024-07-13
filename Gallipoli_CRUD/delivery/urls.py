from rest_framework import routers
from .api import HeladoViewSet

router = routers.DefaultRouter()

router.register('api/delivery', HeladoViewSet, 'delivery')

urlpatterns = router.urls
