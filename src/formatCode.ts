import * as vscode from 'vscode';
import defaultPreferences from './defaultPreferences';

const { 
    formatOnOpen 
} = defaultPreferences;

let isFirstRun = true;

export async function formatCode() {
    type Path = string;

    if (
        (isFirstRun && formatOnOpen) || 
        !isFirstRun
    ) {
        type TextEditor = vscode.TextEditor;

        

        vscode.window.showInformationMessage('buckle up buckaroos');
        const fileName: TextEditor | undefined = vscode.window.activeTextEditor;
        let fsPath: Path | undefined = vscode?.window?.activeTextEditor?.document?.uri.fsPath;

        if (!fsPath) {
            fsPath = '';
        }
    }

    if (isFirstRun) {
        isFirstRun = false;
    }

    return null;
};

export default formatCode;