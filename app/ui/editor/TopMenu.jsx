'use client';

import { BlockButton, MarkButton, InsertImageButton } from "./TextEditor"
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";

import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';
import Code from '@mui/icons-material/Code';
import LooksOne from '@mui/icons-material/LooksOne';
import LooksTwo from '@mui/icons-material/LooksTwo';
import FormatQuote from '@mui/icons-material/FormatQuote';
import FormatListNumbered from '@mui/icons-material/FormatListNumbered';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';
import FormatAlignLeft from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenter from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRight from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustify from '@mui/icons-material/FormatAlignJustify';
import ImageIcon from '@mui/icons-material/Image';

export default function TopMenu() {
    return (
        <Box sx={{ position: "sticky", top: 0, zIndex: 1 }}>
            <Toolbar />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Paper sx={{ m: 1, border: 1, borderColor: "divider" }}>
                    <MarkButton format="bold" Icon={<FormatBold />} />
                    <MarkButton format="italic" Icon={<FormatItalic />} />
                    <MarkButton format="underline" Icon={<FormatUnderlined />} />
                    <MarkButton format="code" Icon={<Code />} />
                    <BlockButton format="heading-one" Icon={<LooksOne />} />
                    <BlockButton format="heading-two" Icon={<LooksTwo />} />
                    <BlockButton format="block-quote" Icon={<FormatQuote />} />
                    <BlockButton format="numbered-list" Icon={<FormatListNumbered />} />
                    <BlockButton format="bulleted-list" Icon={<FormatListBulleted />} />
                    <BlockButton format="left" Icon={<FormatAlignLeft />} />
                    <BlockButton format="center" Icon={<FormatAlignCenter />} />
                    <BlockButton format="right" Icon={<FormatAlignRight />} />
                    <BlockButton format="justify" Icon={<FormatAlignJustify />} />
                    <InsertImageButton Icon={<ImageIcon />} />
                </Paper>
            </Box>
        </Box>
    )
}