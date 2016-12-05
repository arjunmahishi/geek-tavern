from django.shortcuts import render
import time

nickname = "arjun"
chatId = nickname + str(int(time.time()))
# firebase.delete("/catagory", "123")


def home(requests):
	return render(requests, "home.html")

def chat(requests):
	context = {}
	post = requests.POST or None
	if post :
		print post
		context['role'] = post['role']
		context['chatId'] = post['chosenTopic']

	return render(requests, "chat.html", context )

def login(requests):
	return render(requests, "login.html")

def prep(requests):
	get = requests.GET or None
	post = requests.POST or None

	if post:
		global chatId
		chatId = post['chatId']
		print post

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