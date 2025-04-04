import { Produto } from '../types/Produto';

const API_URL = `${process.env.REACT_APP_API_URL}/api/produtos`; // Ajuste conforme sua API

export const produtoService = {
    listar: async (): Promise<Produto[]> => {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Erro ao listar produtos');
        return response.json();
    },

    obterPorId: async (id: number): Promise<Produto> => {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('Erro ao obter produto');
        return response.json();
    },

    criar: async (produto: Omit<Produto, 'id'>): Promise<Produto> => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        });
        if (!response.ok) throw new Error('Erro ao criar produto');
        return response.json();
    },

    atualizar: async (id: number, produto: Produto): Promise<Produto> => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        });
        if (!response.ok) throw new Error('Erro ao atualizar produto');
        return response.json();
    },

    deletar: async (id: number): Promise<void> => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Erro ao deletar produto');
    },

    atualizarEstoque: async (id: number, quantidade: number): Promise<Produto> => {
        const response = await fetch(`${API_URL}/${id}/estoque`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantidade }),
        });
        if (!response.ok) throw new Error('Erro ao atualizar estoque');
        return response.json();
    }
}; 