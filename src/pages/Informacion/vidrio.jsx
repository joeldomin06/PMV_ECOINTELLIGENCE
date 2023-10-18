import React from 'react';
import NavBar from '../../components/nav_bar'
import { Bread_crumbs } from '../../components/breadcrumbs';
import Footer from '../../components/footer';
import '../../stylesheets/page/page__container.scss';
import Separador from '../../components/separator';

export const Vidrio = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <h1 >Mi Nueva Página</h1>
                <p>Este es un nuevo prototipo de página.</p>
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>
    );
};

export default Vidrio;