import {
    FormControl,
    InputLabel,
    Paper,
    Select,
    TextField,
} from "@mui/material";
import React, { FC } from "react";
import styles from "../../styles/creation.module.scss";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import CreationSelect from "./CreationSelect";
type CreationItemProps = {
    children: React.ReactNode;
};

const CreationItem: FC<CreationItemProps> = ({ children }) => {
    const [type, setType] = React.useState("select");

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    return (
        <Paper className={styles.creationItem}>
            <TextField label="Name" />
            <FormControl>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                    labelId="type-label"
                    id="select"
                    value={type}
                    label="Type"
                    onChange={handleChange}
                >
                    <MenuItem value={"input"}>Input</MenuItem>
                    <MenuItem value={"textarea"}>Textarea</MenuItem>
                    <MenuItem value={"select"}>Select</MenuItem>
                </Select>
            </FormControl>
            <TextField
                margin="normal"
                rows={3}
                multiline
                label="Descriptiton"
                fullWidth
            />
            {type === "select" ? <CreationSelect /> : null}
        </Paper>
    );
};

export default CreationItem;
