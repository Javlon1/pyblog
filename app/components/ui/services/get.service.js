// const endpointGet = 'limit';
// const fullUrl = `${urlApi}/${endpointGet}/`;

// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch(fullUrl, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
                        // 'Authorization': `Token ${auth_token}`,
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error(`Ошибка: ${response.status}`);
//             }

//             const data = await response.json();

//             if (data) {
//                 setData(data);
//             } else {
//                 console.error('Ошибка: Некорректные данные получены от сервера.');
//             }

//         } catch (error) {
//             console.error('Ошибка при запросе данных:', error.message);
//         }
//     };

//     fetchData();
// }, [fullUrl]);