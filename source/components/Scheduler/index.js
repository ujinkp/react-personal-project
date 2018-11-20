// Core
import React, { Component } from 'react';

import Task from 'components/Task';

// Instruments
import Styles from './styles.m.css';
import { api } from '../../REST'; // ! Импорт модуля API должен иметь именно такой вид (import { api } from '../../REST')

export default class Scheduler extends Component {
    render () {
        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input placeholder = 'Поиск' type = 'search' />
                    </header>
                    <section>
                        <form>
                            <input maxLength = { 50 } placeholder = 'Описaние моей новой задачи' type = 'text' />
                            <button>Добавить задачу</button>
                        </form>
                        <div>
                            <ul>
                                <div>
                                    <Task />
                                </div>
                            </ul>
                        </div>
                    </section>
                    <footer>
                        <div>
                            <svg>
                                <g>
                                    <rect />
                                    <path />
                                </g>
                            </svg>
                        </div>
                        <span>Все задачи выполнены</span>
                    </footer>
                </main>
            </section>
        );
    }
}
