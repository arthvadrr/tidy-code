import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "tidy-code" is now active!');

	let disposable = vscode.commands.registerCommand('tidy-code.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from tidy-code!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}