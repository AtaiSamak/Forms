import React, { FC, useMemo, useState } from "react";
import styles from "../../styles/creation.module.scss";
import CreationItem from "./CreationItem";
import { Stack, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Creation: FC = () => {
    const [newItemID, setNewItemID] = useState<number>(0);
    const [itemIDs, setItemIDs] = useState<number[]>([]);

    const addCreationItem = () => {
        setItemIDs([...itemIDs, newItemID]);
        setNewItemID(newItemID + 1);
    };

    const handleDeleteItem = (deleteID: number) => () => {
        setItemIDs(itemIDs.filter((id) => id !== deleteID));
    };

    const creationItems = useMemo(
        () =>
            itemIDs.map((id) => (
                <CreationItem key={id} handleDelete={handleDeleteItem(id)} />
            )),
        [itemIDs]
    );

    return (
        <Stack className={styles.container}>
            {creationItems}
            <Button
                style={{ maxWidth: "50%", margin: "8px auto 30px" }}
                variant="contained"
                size="large"
                className={styles.creationSelect}
                startIcon={<FontAwesomeIcon icon={faPlus} />}
                onClick={addCreationItem}
            >
                Add new item
            </Button>
        </Stack>
    );
};

export default Creation;
