import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './Form.module.css';

import Input from '../components/Input';
import Select from '../components/Select';

function Form(){

    const [categories, setCategories] = useEffect([]);

    return(
        <section className={styles.form_container}>
            <h1>Formulário de Turmas</h1>
            <form>

                <Input type='text' name='name_student' id='name_student' text='Nome do Aluno(a)' placeholder='Digite o nome do aluno(a)' />

                <Select name='class_id' text='Selecione a turma do aluno(a)' />
                
                <p>
                    <input type='submit' value='Cadastrar Aluno(a)' options={categories} />
                </p>   

            </form>
       </section>
    )
}

export default Form;