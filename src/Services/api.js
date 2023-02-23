
export async function Register(user){
    return await fetch('https://food-delivery.kreosoft.ru/api/account/register',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json:charset=utf-8'
        },
        body: JSON.stringify(user)
    });
}

export async function Login(user){
    return await fetch('https://food-delivery.kreosoft.ru/api/account/login',{
        method:'POST',
        headers:{
            'content-type': 'application/json:charset=utf-8'
        },
        body:JSON.stringify(user)
    })
}