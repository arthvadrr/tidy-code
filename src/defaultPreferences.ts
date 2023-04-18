interface DePref {
    formatOnOpen: boolean,
    formatOnSave: boolean
}

export const defaultPreferences: DePref = {
    formatOnOpen: true,
    formatOnSave: true,
};

export default defaultPreferences;