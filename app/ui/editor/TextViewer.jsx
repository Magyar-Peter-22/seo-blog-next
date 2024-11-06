import { styled } from '@mui/material';
import { useMemo } from 'react';
import {
    createEditor
} from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { withImages } from './EditorImages';
import { Element, Leaf, ReadonlyContext } from "./TextEditorComponents";

const StyledEditable = styled(Editable)({
    fontFamily: 'inherit',
});

export default function TextViewer({ slateProps, editorProps }) {
    const editor = useMemo(() => withImages(withReact(createEditor())), []);
    return (
        <ReadonlyContext.Provider value={true}>
            <Slate
                editor={editor}
                {...slateProps}
            >
                <StyledEditable
                    renderElement={Element}
                    renderLeaf={Leaf}
                    {...editorProps}
                />
            </Slate >
        </ReadonlyContext.Provider>
    )
}