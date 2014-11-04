
	});
});


ioServer.listen(app.get('port'), function(req,res) {
    console.log('Express server listening on port ' + app.get('port'));
});
