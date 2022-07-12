import { IconButton, TextField } from "@mui/material";
import React, { ChangeEvent, FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/creation.module.scss";

type InputProps = {
    handleDelete: () => void;
};

const Input: FC<InputProps> = ({ handleDelete }) => {
    const [value, setValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className={styles.input}>
            <TextField
                variant="outlined"
                label="New field"
                margin="dense"
                value={value}
                onChange={handleChange}
            ></TextField>
            <IconButton
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
        </div>
    );
};

export default Input;
