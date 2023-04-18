import { 
	readFile,
	writeFile
} from 'fs/promises';

import {
	window, 
	TextEditor,
	TextEdit
} from 'vscode';

import * as vscode from 'vscode';
import defaultPreferences from './defaultPreferences';
// to store preferences maybe? https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.globalState

type Path = string;

//Safe saving! 
// look into texteditor
// https://code.visualstudio.com/api/references/vscode-api#TextEditor
//https://code.visualstudio.com/api/references/vscode-api#workspace
export async function activate(context: vscode.ExtensionContext) {
	let accumulator = 0;
	const { formatOnOpen } = defaultPreferences;

	let giantSwitch = 0;
	

	async function formatCode() {
		if (
			(giantSwitch === 0 && formatOnOpen) || giantSwitch === 1
		) {

			//do magic

			type TextEditor = vscode.TextEditor;

			vscode.window.showInformationMessage('buckle up buckaroos');

			const fileName: TextEditor | undefined = vscode.window.activeTextEditor;

			console.log('filename: ', fileName);

			let fsPath: Path | undefined = vscode?.window?.activeTextEditor?.document?.uri.fsPath;

			if (!fsPath) {
				fsPath = '';
			}

			const fileContents = await readFile(fsPath, {encoding: 'utf-8'});

			// do cool formatting stuffs
			
			let formattedContent = fileContents;
			formattedContent += `hi ${accumulator++}`;

			const writtenFile = await writeFile(fsPath, formattedContent);

			console.log(fileContents);
		}

		if (!giantSwitch) {
			giantSwitch = 1;
		}

		return null;
	};

	const formatCodeCommand = vscode.commands.registerCommand('tidy-code.formatCode', formatCode);
	const formatOnSave = vscode.workspace.onDidSaveTextDocument(formatCode);
	const formatOnDidOpenTextDocument = vscode.workspace.onDidOpenTextDocument(formatCode);

	context.subscriptions.push(formatCodeCommand);
	context.subscriptions.push(formatOnDidOpenTextDocument);
	context.subscriptions.push(formatOnSave);
}

export function deactivate() {}