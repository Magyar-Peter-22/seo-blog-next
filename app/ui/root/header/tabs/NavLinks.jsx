'use client';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavItem(name, url) {
    this.name = name;
    this.url = url;
}
const navItems = [
    new NavItem("Home", "/"),
    new NavItem("Articles", "/articles"),
    new NavItem("Authors", "/authors")
];

export default () => {
    const pathname = usePathname();
    return (
        <List>
            {navItems.map(({ name, url }, i) => (
                <Link
                    href={url}
                    style={{
                        color: "unset",
                        textDecoration: "unset",
                    }}
                    key={i}
                >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText
                                primary={name}
                                primaryTypographyProps={{
                                    sx: {
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        fontWeight: pathname === url && "bold"
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
    )
}