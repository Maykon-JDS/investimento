import requests

from datetime import datetime, timedelta

precoTeto = 0

retornoEsperado = 0

valorMedioDividendos = 0

taxaCDIAtual = None

valorMedioDividendos = float(input("Valor médio dos dividendos: "))

retornoEsperado = float(input("Retorno esperado (%): "))

precoTeto = valorMedioDividendos / (retornoEsperado/100)

print(f'{precoTeto:.2f}')
