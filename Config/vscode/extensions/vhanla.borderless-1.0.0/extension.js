const vscode = require('vscode')
const shell = require('node-powershell')

function activate(context) {
	const path = context.asAbsolutePath('./ToggleBorder.cs')
	const ps = new shell({
		executionPolicy: 'ByPass',
		noProfile: true
	})
	context.subscriptions.push(ps)
	ps.addCommand(`Add-Type -Path '${path}'`)

	function toggleBorder(visible, borderType) {
		let bordertype = 0;
		switch (borderType){
			case 'bordersizable': bordertype = 1; break;
			case 'bordersimple': bordertype = 2; break;
		}
		ps.addCommand(`[CBS]::ToggleBorder(${process.pid}, ${visible}, ${bordertype})`)
		ps.invoke().then(res => {
			// console.log(res)
			console.log(`Borderless: set visible ${visible}`)
			//config.update('borderless', visible, true)
		}).catch(err => {
			console.log(err)
			// vscode.window.showErrorMessage(`Borderless Error: ${err}`)
		})
	}

	context.subscriptions.push(vscode.commands.registerCommand('borderless.on', () => {
		// vscode.window.showInformationMessage('Title Bars enabled.')
		toggleBorder(0,'any')
	}))

	context.subscriptions.push(vscode.commands.registerCommand('borderless.off', () => {
		const config = vscode.workspace.getConfiguration('borderless')
		const enabled = config.get('autoenable')
		const bordertype = config.get('bordertype')
		toggleBorder(1,bordertype)
	}))

	const config = vscode.workspace.getConfiguration('borderless')
	const enabled = config.get('autoenable')
	const bordertype = config.get('bordertype')
	if (enabled){
		toggleBorder(1, bordertype)
	}
}
exports.activate = activate

function deactivate() {}

exports.deactivate = deactivate

