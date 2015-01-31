# Flying-Dutchman-4
Web-based ordering system for a small pub.

The Pub Ordering System

The Flying Dutchman is a pub in central Uppsala. It is a small place
with a flourishing business; consisting mostly of regulars, i.e., recurring
customers, some of who even have a credit at the pub.

The pub has an old system for managing the stock of beers, which now has
to be replaced by a web based system, since there will be several terminals in
the pub. The pub is looking for an expansion of their business and the old
system quite clearly will not cope. The core database is, however, in good
condition and was updated fairly recently. The new system will thus use this
old database through the provided API (see separate document).

The ordering system at the pub is slightly special, and is based on the
feeling of an intimate atmosphere between the frequenters of the pub and its
staff. The idea is to make the pub feel like a countryside pub where the formal
procedures are less important than the feeling of a family establishment.

The pub has a large number of selected special beers in stock, some of
which have to be ordered specially when they run out. Others are available
directly from Systembolaget, and can be picked up more or less the next day.
The special beers are stored in the big fridge, which unfortunately is at the back
end of the pub. To reduce queuing time at the counter, the regulars who have a
credit at the establishment are entrusted to manage their purchases by
themselves, both for registering and for fetching beers from the back fridge. 

When a customer orders a beer at the counter, the order has to be
checked against the number in stock. If there is a large enough quantity, the
customer pays (or subtracts from the credit), and the beer is fetched in the
fridge. To ensure that this system works well, it is important to keep a good
check on the availability, both to ensure that a customer at the counter cannot
order a beer that is currently not in stock, and to ensure that the regulars
are registering their purchases properly.

When the beers are running out, the system prepares an order to be sent
next day, and also notes that the selected kind is no longer available. 

The pub owner has lately also considered to increase the assortment in
the close future to include also selections of wines and whiskies. The database
is already prepared for this and it is mostly a matter of designing the
resource management system to handle different categories of beverages.
