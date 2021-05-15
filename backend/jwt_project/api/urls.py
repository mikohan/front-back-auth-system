from django.urls import include, path
from rest_framework import routers
from jwt_project.api import views

router = routers.DefaultRouter()
router.register(r"test-users", views.UserViewSet)
router.register(r"test-groups", views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
    path("test-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
