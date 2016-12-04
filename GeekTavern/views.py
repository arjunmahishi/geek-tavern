from django.shortcuts import render
import time

nickname = "arjun"
chatId = nickname + str(int(time.time()))
# firebase.delete("/catagory", "123")


def home(requests):
	return render(requests, "home.html")

def chat(requests):
	return render(requests, "chat.html")

def login(requests):
	return render(requests, "login.html")

def prep(requests):

	get = requests.GET or None
	post = requests.POST or None

	context = {
		# TODO : Change the name to something more meaningful
		'chatId' : chatId,
	}

	if get :
		if get['role'] == '1':
			context['asker'] = True
		else:
			context['asker'] = False	

	return render(requests, "prep.html", context)