import React from "react";
import { create } from "react-test-renderer";
import Header from "../Header";

describe('Snapshot testing', () => {
    it('Header matches snapshot', () => {
        const header = create(<Header/>);
        expect(header.toJSON()).toMatchSnapshot();
    });
}) 