package it.unisa.model;
import java.util.ArrayList;


public class Carrello {
	
    private ArrayList<ItemCarrello> nelCarrello = new ArrayList<>();
    private float totale = 0;
    private java.util.Map<Integer, ItemCarrello> indexById = new java.util.HashMap<>();
    
    public void aggiungiProdotto(ItemCarrello item) {
    	
    	boolean presente = false;
    	for(int i = 0; i < nelCarrello.size(); i++) {
        if (nelCarrello.get(i).getProdotto().getId_prodotto() == item.getProdotto().getId_prodotto())
            {
                presente = true;
                nelCarrello.get(i).setQuantity(item.getQuantity());
            }
        }
        if (item.getProdotto() != null && presente == false)
        {
            this.nelCarrello.add(item);
            
 
        }
       
            		
    }
    
    public void svuotaCarrello()
    {
        nelCarrello.removeAll(nelCarrello);
        this.totale = 0;
    }
    
    public ItemCarrello doretrieveById(int id) {
        return indexById.get(id);
    }
    
    public int getQuantityById(int id) {
    	ItemCarrello item =doretrieveById(id);
    	if(item==null)
    		return 1;
    	else
    	return item.getQuantity();
    }
    
    //funzione usata per scorrere la lista di prodotti nel carrello
    public ItemCarrello doretrieveByIndex(int index)
    {
        return nelCarrello.get(index);
    }

    
    public float getTotale() {
        float tot = 0;
        for (int i = 0; i < nelCarrello.size(); i++) {
            ItemCarrello item = nelCarrello.get(i);
            tot += item.getProdotto().getPrezzo() * item.getQuantity();
        }
        // arrotondamento semplice a 2 decimali
        tot = Math.round(tot * 100f) / 100f;
        return tot;
    }
    
    public int getSize()
    {
        return this.nelCarrello.size();
    }

    public void rimuoviProdottobyId(int id)
    {
        for (int i = 0; i < nelCarrello.size(); i++)
        {
            ItemCarrello temp = nelCarrello.get(i);
            if (temp.getProdotto().getId_prodotto() == id)
            {
                nelCarrello.remove(i);
            }
        }
    }


}
