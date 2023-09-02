using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class CartController : BaseApiController
{
    private readonly ICartRepository _cartRepository;
    public CartController(ICartRepository cartRepository)
    {
        _cartRepository = cartRepository;
    }

    [HttpGet]
    public async Task<ActionResult<CustomerCart>> GetCartById(string id)
    {
        var cart = await _cartRepository.GetCartAsync(id);

        return Ok(cart ?? new CustomerCart(id));
    }

    [HttpPost]
    public async Task<ActionResult<CustomerCart>> UpdateBasket(CustomerCart cart)
    {
        var updatedCart = await _cartRepository.UpdateCartAsync(cart);

        return Ok(updatedCart);
    }

    [HttpDelete]
    public async Task DeleteCartAsync(string id)
    {
        await _cartRepository.DeleteCartAsync(id);
    }
}
