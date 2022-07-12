import React, { FC, useState, useMemo } from "react";
import Button from "@mui/material/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/creation.module.scss";
import Input from "../UI/Input";

const CreationSelect: FC = () => {
    const [id, setID] = useState<number>(0);
    const [indexes, setIndexes] = useState<number[]>([]);

    const addField = () => {
        setIndexes([...indexes, id]);
        setID(id + 1);
    };

    const deleteField = (deleteID: number) => () => {
        setIndexes(indexes.filter((id) => id !== deleteID));
    };

    const fieldComponents = useMemo(
        () =>
            indexes.map((index) => (
                <React.Fragment key={index}>
                    <Input onDelete={deleteField(index)} />
                </React.Fragment>
            )),
        [indexes]
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
