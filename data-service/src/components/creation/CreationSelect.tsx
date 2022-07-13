import React, { FC, useState, useMemo } from "react";
import Button from "@mui/material/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/creation.module.scss";
import CreationSelectField from "./CreationSelectField";

const CreationSelect: FC = () => {
    const [newFieldID, setNewFieldID] = useState<number>(0);
    const [fieldIDs, setFieldIDs] = useState<number[]>([]);
    const [fieldValues] = useState(new Map());

    const addField = () => {
        setFieldIDs([...fieldIDs, newFieldID]);
        setNewFieldID(newFieldID + 1);
    };

    const deleteField = (deleteID: number) => () => {
        setFieldIDs(fieldIDs.filter((id) => id !== deleteID));
        fieldValues.delete(deleteID);
    };

    const handleFieldValueChange = (id: number) => (value: string) => {
        fieldValues.set(id, value);
    };

    const fieldComponents = useMemo(
        () =>
            fieldIDs.map((id) => (
                <React.Fragment key={id}>
                    <CreationSelectField
                        handleDelete={deleteField(id)}
                        setNewValue={handleFieldValueChange(id)}
                    />
                </React.Fragment>
            )),
        [fieldIDs]
    );

    return (
        <>
            {fieldComponents}
            <Button
                style={{ marginTop: 8 }}
                variant="outlined"
                className={styles.creationSelect}
                startIcon={<FontAwesomeIcon icon={faPlus} />}
                onClick={addField}
            >
                Add field
            </Button>
        </>
    );
};

export default CreationSelect;
