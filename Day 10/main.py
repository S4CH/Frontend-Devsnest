import os

out = os.popen("ls backgrounds").read().split();
print(str(out))
