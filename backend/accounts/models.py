from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("User must have an email")

        email = self.normilize_email(email)
        user = self.model(email=email)

        user.set_password(password)
        user.save
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    user = models.CharField(max_length=255)
    is_active = (models.BooleanField(default=False),)
    is_stuff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = "email"
