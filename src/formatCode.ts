import * as vscode from 'vscode';
import defaultPreferences from './defaultPreferences';

type TextEditor = vscode.TextEditor;
type TextEditorEdit = vscode.TextEditorEdit;

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
        const activeTextEditor: TextEditor | undefined = vscode.window.activeTextEditor;

        if (activeTextEditor) {
            const activeText: string = activeTextEditor.document.getText();

            

            vscode.window.showInformationMessage('buckle up buckaroos');
        }
    }

    if (isFirstRun) {
        isFirstRun = false;
    }

    return null;
};

export default formatCode;