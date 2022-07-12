import React, { FC } from "react";
import styles from "../../styles/creation.module.scss";
import CreationItem from "./CreationItem";
import { Stack } from "@mui/material";

const Creation: FC = () => {
    return (
        <Stack className={styles.container}>
            <CreationItem>It's Good Idea</CreationItem>
        </Stack>
    );
};

export default Creation;
