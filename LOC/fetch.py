#!/usr/bin/python
# -*- coding: utf-8 -*-
import urllib.request

def SportDemo():
    # Set url parameter
    url = "http://api.isportsapi.com/sport/football/league/basic?api_key=<eUET0MecaqtAdM46>"

    # Call iSport Api to get data in json format
    f = urllib.request.urlopen(url)
    content = f.read()

    print(content.decode('utf-8'))


SportDemo()

