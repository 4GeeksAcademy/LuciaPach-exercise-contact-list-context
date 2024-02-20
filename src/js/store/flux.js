import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: {
				contacts: []
			}
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/");
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await response.json();
					setStore({ agenda: { contacts: data } });
				} catch (error) {
					//console.error("Error fetching contacts:", error);
				}
			}
		}
	};
};

export default getState;
