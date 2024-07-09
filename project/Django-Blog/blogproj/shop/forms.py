from django import forms

class PayForm(forms.Form):
    producto_id = forms.IntegerField(widget=forms.HiddenInput())

