import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Pruebas con acciones de ui', () => {
    test('todas las acciones deben de funcionar', () => {
        const testFinishLoading = finishLoading();
        const testStartLoading = startLoading();
        const testRemoveError = removeError();
        const testSetError = setError('Error');

        expect(testFinishLoading).toEqual({
            type: types.uiFinishLoading
        });
        expect(testStartLoading).toEqual({
            type: types.uiStartLoading
        });
        expect(testRemoveError).toEqual({
            type: types.uiRemoveError
        });
        expect(testSetError).toEqual({
            type: types.uiSetError,
            payload: 'Error'
        });
    });
});