// Copyright 2021 kms
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers();
    let whoAmI = '';
    let checkLogin = false;

    // for(let i=0; i < users.length; i++) {
    //     console.log('for loop', users[i].Id);
    // }

    users.map((user)=> {
        console.log(user.Id);
        if (vars.id === user.Id && vars.password === user.Password) {
            console.log('login success!');
            checkLogin = true;
            if (vars.id === 'admin') {
                whoAmI = 'admin';
            } else {
                whoAmI = 'user';
            }
        }
    })

    if (checkLogin && whoAmI === 'admin') {
        res.redirect('/delete');
    } else if (checkLogin && whoAmI === 'user') {
        res.redirect('/select');
    } else {
        console.log('login falied!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})

module.exports = router;