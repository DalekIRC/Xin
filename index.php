<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    
    <link href="css/client.css" rel="stylesheet">

    <title>Chat Portal</title>
</head>

<?php require_once("php/include.php"); error_log("Yay");?>
<body style="height:100%;width:100%;">
    <nav class="navbar" data-bs-theme="dark">
        <div class="container-fluid">
            <h2><img src="https://chatportal.bg/forum/images/logo.png" width="100x" class="rounded" height="36px"><span class="badge ps-3 pe-3" style="font-weight:600"></span></h2>
            <div>
                <button type="button" class="text-right btn btn-secondary" data-bs-toggle="modal" data-bs-target="#serverSettings">Settings</button>
                <input type="submit" name="submit" class="btn btn-success" id="submit" value="Connect" onclick="connectWebSocket();"/>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col">
                <div id="treebar"></div>
            </div>
            <div class="col">
                <div id="chatwindow" class="pb-4">
                    <div id="topic" class="topic" hidden></div>
                    <div id="output" class="output"></div>
                </div>
                
            </div>
                <div id="nicklistwindow" class="col">
            </div>
        </div>
        <footer class="footer mt-auto mb-auto py-3 bg-dark align-items-center input-group mr-2 ml-2 pt-2">
            <div class="ms-2 text-middle text-center input-group-item btn btn-sm rounded-pill btn-success flex pe-2"
            style="min-width:30px;max-width:150px;" id="options-box">+</div>
            <input type="text" class="rounded me-2 ms-2 shadow-none bg-nihao form-control text-white"
            placeholder="Send a message..." style="position:sticky; color:#5A5A5A;background-color:#5A5A5A"
            name="input" id="input" aria-label="Text to send">
            <span class="btn rounded-pill me-4 text-white" style="min-width:100px;width:9%" name="submit" id="submit_msg"
            onclick="send();" id="send-btn">Send</span>		 
        </footer>
    </div>

<script>
	const input = document.getElementById("input");
	
	input.addEventListener('keydown', e => {
		if (e.keyCode == 13)
			send();
	});
	
</script>
<div class="modal" id="serverSettings" tabindex="-1" aria-labelledby="serverSettingsLabel" aria-hidden="true">



	<div class="modal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Server stuff</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
			<form>
				<div class="mb-3">
					<label for="settings_server_nick" class="col-form-label">Nick</label>
					<input type="text" class="form-control" id="settings_server_nick">
				</div>
				<div class="mb-3">
					<label for="settings_server_ident" class="col-form-label">Ident</label>
					<input type="text" class="form-control" id="settings_server_ident">
				</div>
				<div class="mb-3">
					<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
					<input type="text" class="form-control" id="settings_server_gecos">
				</div>
				<div class="mb-3">
					<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
					<input type="text" class="form-control" id="settings_server_gecos">
				</div>
				<div class="mb-3">
					<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
					<input type="text" class="form-control" id="settings_server_gecos">
				</div>
				<div class="mb-3">
					<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
					<input type="text" class="form-control" id="settings_server_gecos">
				</div>
				<div class="mb-3">
					<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
					<input type="text" class="form-control" id="settings_server_gecos">
				</div>
			</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
			</div>
		</div>
	</div>

	<div class="bg-light modal-dialog modal-xl modal-dialog-scrollable">
		<div class="modal-content">
			<div class="d-flex flex-row-reverse bd-highlight me-2 navbar navbar-expand-lg">
				<button class="btn ms-2 me-2" id="serverSettingsLabel">My Details</button>
				<button class="btn btn-success ms-2 me-2" id="serverSettingsLabel">Server</button>
				<button class="btn btn-success ms-2 me-2" id="serverSettingsLabel">Account</button>
				<button class="btn btn-success ms-2" id="serverSettingsLabel">Settings</button>
			</div>
		</div>
		<div class="modal-body">
			<div id="user">
				<form>
					<div class="mb-3">
						<label for="settings_user_nick" class="col-form-label">Nick</label>
						<input type="text" class="form-control" id="settings_user_nick">
					</div>
					<div class="mb-3">
						<label for="settings_user_ident" class="col-form-label">Ident</label>
						<input type="text" class="form-control" id="settings_user_ident">
					</div>
					<div class="mb-3">
						<label for="settings_user_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
						<input type="text" class="form-control" id="settings_user_gecos">
					</div>
					<div class="mb-3">
						<label for="settings_user_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
						<input type="text" class="form-control" id="settings_user_gecos">
					</div>
				</form>
			</div>

			<div id="server" hidden>
				<div class="modal-dialog">
					Server stuff lmao
					<form>
						<div class="mb-3">
							<label for="settings_server_nick" class="col-form-label">Nick</label>
							<input type="text" class="form-control" id="settings_server_nick">
						</div>
						<div class="mb-3">
							<label for="settings_server_ident" class="col-form-label">Ident</label>
							<input type="text" class="form-control" id="settings_server_ident">
						</div>
						<div class="mb-3">
							<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
							<input type="text" class="form-control" id="settings_server_gecos">
						</div>
						<div class="mb-3">
							<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
							<input type="text" class="form-control" id="settings_server_gecos">
						</div>
						<div class="mb-3">
							<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
							<input type="text" class="form-control" id="settings_server_gecos">
						</div>
						<div class="mb-3">
							<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
							<input type="text" class="form-control" id="settings_server_gecos">
						</div>
						<div class="mb-3">
							<label for="settings_server_gecos" class="col-form-label">Status message <small>(It's not recommended to use your real name)</small></label>
							<input type="text" class="form-control" id="settings_server_gecos">
						</div>
					</form>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save</button>
			</div>
		</div>
	</div>
</div>
</body>
</html>