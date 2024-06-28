import base64
import requests
PAYPAL_CLIENT_ID = 'AQ2n6zER4j9akwofTennLh84jG1PA8oDQYfmVL5ONKSCcSvGbWG6Sb0-lxRglvKwjGdTu2G9z94iQEDx'
PAYPAL_CLIENT_SECRET = 'AQ2n6zER4j9akwofTennLh84jG1PA8oDQYfmVL5ONKSCcSvGbWG6Sb0-lxRglvKwjGdTu2G9z94iQEDx'

BASE_URL = 'https://api-m.sandbox.paypal.com'

def generarAccessToken():
    if not PAYPAL_CLIENT_ID or not PAYPAL_CLIENT_SECRET:
        raise ValueError('No existen las credenciales')
    
    auth = f"{PAYPAL_CLIENT_ID} : {PAYPAL_CLIENT_SECRET}"
    auth = base64.b64enconde(auth.encode()).decode('utf-8')
    
    response = requests.post(
        "https://api-m.sandbox.paypal.com/v2/checkout/orders",
        data={"grant_type=client_credentials"},
        headers={"Authorization": f"Basic {auth}"}
    )

    print("=======================================")
    print(response)