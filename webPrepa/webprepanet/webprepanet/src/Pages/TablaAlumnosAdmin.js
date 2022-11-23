import React, { Component, useState, useEffect } from 'react';
import { Table, Form, Container, Row, Col, Dropdown } from 'react-bootstrap';
import {  FireStoreTablaAlumnosInfo } from './components/FireStoreData'

import "bootstrap/dist/css/bootstrap.min.css";
import "./TablaAlumnosAdmin.css";




function TablaAlumnosAdmin() {


    return (
                            <FireStoreTablaAlumnosInfo />
    );
}

export default TablaAlumnosAdmin;
