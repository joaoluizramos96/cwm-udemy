import socket as s

host = str(input("Informe o domínio do site: "))
ip = s.gethostbyname(host)

print("O domínio", host, "possui o seguinte IP:", ip)