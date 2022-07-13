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
import { SelectChangeEvent, IconButton } from "@mui/material";
import CreationSelect from "./CreationSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type CreationItemProps = {
    handleDelete: () => void;
};

const CreationItem: FC<CreationItemProps> = ({ handleDelete }) => {
    const [type, setType] = React.useState("input");

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
            <IconButton
                className={styles.creationItemDelete}
                onClick={handleDelete}
                color="error"
                aria-label="delete"
                size="large"
            >
                <FontAwesomeIcon
                    icon={faTrash}
                    style={{ margin: 0, width: 24, height: 24 }}
                />
            </IconButton>
        </Paper>
    );
};

export default CreationItem;
