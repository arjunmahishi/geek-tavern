from django.shortcuts import render

username = "arjun"
# firebase.delete("/catagory", "123")


def home(requests):
	return render(requests, "home.html", {'title' : 'Home'})

def chat(requests):
	return render(requests, "chat.html", {"title" : "Chat Room"})

def login(requests):
	return render(requests, "login.html", {"title" : "Log in"})

def prep(requests):

	get = requests.GET or None
	post = requests.POST or None

	context = {
		# TODO : Change the name to something more meaningful
		'title' : "Prep",
		'currentUser' : username,
	}

	if get :
		if get['role'] == '1':
			context['asker'] = True
		else:
			context['asker'] = False	

	return render(requests, "prep.html", context)